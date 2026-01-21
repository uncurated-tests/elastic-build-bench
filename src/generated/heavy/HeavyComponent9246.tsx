'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9246<T> = T extends (infer U)[]
  ? DeepReadonlyArray9246<U>
  : T extends object
  ? DeepReadonlyObject9246<T>
  : T;

interface DeepReadonlyArray9246<T> extends ReadonlyArray<DeepReadonly9246<T>> {}

type DeepReadonlyObject9246<T> = {
  readonly [P in keyof T]: DeepReadonly9246<T[P]>;
};

type UnionToIntersection9246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9246<T> = UnionToIntersection9246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9246<T extends unknown[], V> = [...T, V];

type TuplifyUnion9246<T, L = LastOf9246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9246<TuplifyUnion9246<Exclude<T, L>>, L>;

type DeepPartial9246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9246<T[P]> }
  : T;

type Paths9246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9246<K, Paths9246<T[K], Prev9246[D]>> : never }[keyof T]
  : never;

type Prev9246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9246 {
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

type ConfigPaths9246 = Paths9246<NestedConfig9246>;

interface HeavyProps9246 {
  config: DeepPartial9246<NestedConfig9246>;
  path?: ConfigPaths9246;
}

const HeavyComponent9246 = memo(function HeavyComponent9246({ config }: HeavyProps9246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9246.displayName = 'HeavyComponent9246';
export default HeavyComponent9246;
