'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9766<T> = T extends (infer U)[]
  ? DeepReadonlyArray9766<U>
  : T extends object
  ? DeepReadonlyObject9766<T>
  : T;

interface DeepReadonlyArray9766<T> extends ReadonlyArray<DeepReadonly9766<T>> {}

type DeepReadonlyObject9766<T> = {
  readonly [P in keyof T]: DeepReadonly9766<T[P]>;
};

type UnionToIntersection9766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9766<T> = UnionToIntersection9766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9766<T extends unknown[], V> = [...T, V];

type TuplifyUnion9766<T, L = LastOf9766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9766<TuplifyUnion9766<Exclude<T, L>>, L>;

type DeepPartial9766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9766<T[P]> }
  : T;

type Paths9766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9766<K, Paths9766<T[K], Prev9766[D]>> : never }[keyof T]
  : never;

type Prev9766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9766 {
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

type ConfigPaths9766 = Paths9766<NestedConfig9766>;

interface HeavyProps9766 {
  config: DeepPartial9766<NestedConfig9766>;
  path?: ConfigPaths9766;
}

const HeavyComponent9766 = memo(function HeavyComponent9766({ config }: HeavyProps9766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9766.displayName = 'HeavyComponent9766';
export default HeavyComponent9766;
