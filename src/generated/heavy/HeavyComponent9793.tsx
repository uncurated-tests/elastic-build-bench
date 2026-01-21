'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9793<T> = T extends (infer U)[]
  ? DeepReadonlyArray9793<U>
  : T extends object
  ? DeepReadonlyObject9793<T>
  : T;

interface DeepReadonlyArray9793<T> extends ReadonlyArray<DeepReadonly9793<T>> {}

type DeepReadonlyObject9793<T> = {
  readonly [P in keyof T]: DeepReadonly9793<T[P]>;
};

type UnionToIntersection9793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9793<T> = UnionToIntersection9793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9793<T extends unknown[], V> = [...T, V];

type TuplifyUnion9793<T, L = LastOf9793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9793<TuplifyUnion9793<Exclude<T, L>>, L>;

type DeepPartial9793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9793<T[P]> }
  : T;

type Paths9793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9793<K, Paths9793<T[K], Prev9793[D]>> : never }[keyof T]
  : never;

type Prev9793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9793 {
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

type ConfigPaths9793 = Paths9793<NestedConfig9793>;

interface HeavyProps9793 {
  config: DeepPartial9793<NestedConfig9793>;
  path?: ConfigPaths9793;
}

const HeavyComponent9793 = memo(function HeavyComponent9793({ config }: HeavyProps9793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9793.displayName = 'HeavyComponent9793';
export default HeavyComponent9793;
