'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9636<T> = T extends (infer U)[]
  ? DeepReadonlyArray9636<U>
  : T extends object
  ? DeepReadonlyObject9636<T>
  : T;

interface DeepReadonlyArray9636<T> extends ReadonlyArray<DeepReadonly9636<T>> {}

type DeepReadonlyObject9636<T> = {
  readonly [P in keyof T]: DeepReadonly9636<T[P]>;
};

type UnionToIntersection9636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9636<T> = UnionToIntersection9636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9636<T extends unknown[], V> = [...T, V];

type TuplifyUnion9636<T, L = LastOf9636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9636<TuplifyUnion9636<Exclude<T, L>>, L>;

type DeepPartial9636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9636<T[P]> }
  : T;

type Paths9636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9636<K, Paths9636<T[K], Prev9636[D]>> : never }[keyof T]
  : never;

type Prev9636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9636 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9636 = Paths9636<NestedConfig9636>;

interface HeavyProps9636 {
  config: DeepPartial9636<NestedConfig9636>;
  path?: ConfigPaths9636;
}

const HeavyComponent9636 = memo(function HeavyComponent9636({ config }: HeavyProps9636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9636.displayName = 'HeavyComponent9636';
export default HeavyComponent9636;
