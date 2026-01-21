'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9267<T> = T extends (infer U)[]
  ? DeepReadonlyArray9267<U>
  : T extends object
  ? DeepReadonlyObject9267<T>
  : T;

interface DeepReadonlyArray9267<T> extends ReadonlyArray<DeepReadonly9267<T>> {}

type DeepReadonlyObject9267<T> = {
  readonly [P in keyof T]: DeepReadonly9267<T[P]>;
};

type UnionToIntersection9267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9267<T> = UnionToIntersection9267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9267<T extends unknown[], V> = [...T, V];

type TuplifyUnion9267<T, L = LastOf9267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9267<TuplifyUnion9267<Exclude<T, L>>, L>;

type DeepPartial9267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9267<T[P]> }
  : T;

type Paths9267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9267<K, Paths9267<T[K], Prev9267[D]>> : never }[keyof T]
  : never;

type Prev9267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9267 {
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

type ConfigPaths9267 = Paths9267<NestedConfig9267>;

interface HeavyProps9267 {
  config: DeepPartial9267<NestedConfig9267>;
  path?: ConfigPaths9267;
}

const HeavyComponent9267 = memo(function HeavyComponent9267({ config }: HeavyProps9267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9267.displayName = 'HeavyComponent9267';
export default HeavyComponent9267;
