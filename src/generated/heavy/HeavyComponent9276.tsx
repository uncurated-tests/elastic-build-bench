'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9276<T> = T extends (infer U)[]
  ? DeepReadonlyArray9276<U>
  : T extends object
  ? DeepReadonlyObject9276<T>
  : T;

interface DeepReadonlyArray9276<T> extends ReadonlyArray<DeepReadonly9276<T>> {}

type DeepReadonlyObject9276<T> = {
  readonly [P in keyof T]: DeepReadonly9276<T[P]>;
};

type UnionToIntersection9276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9276<T> = UnionToIntersection9276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9276<T extends unknown[], V> = [...T, V];

type TuplifyUnion9276<T, L = LastOf9276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9276<TuplifyUnion9276<Exclude<T, L>>, L>;

type DeepPartial9276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9276<T[P]> }
  : T;

type Paths9276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9276<K, Paths9276<T[K], Prev9276[D]>> : never }[keyof T]
  : never;

type Prev9276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9276 {
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

type ConfigPaths9276 = Paths9276<NestedConfig9276>;

interface HeavyProps9276 {
  config: DeepPartial9276<NestedConfig9276>;
  path?: ConfigPaths9276;
}

const HeavyComponent9276 = memo(function HeavyComponent9276({ config }: HeavyProps9276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9276.displayName = 'HeavyComponent9276';
export default HeavyComponent9276;
