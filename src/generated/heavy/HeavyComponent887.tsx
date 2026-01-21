'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly887<T> = T extends (infer U)[]
  ? DeepReadonlyArray887<U>
  : T extends object
  ? DeepReadonlyObject887<T>
  : T;

interface DeepReadonlyArray887<T> extends ReadonlyArray<DeepReadonly887<T>> {}

type DeepReadonlyObject887<T> = {
  readonly [P in keyof T]: DeepReadonly887<T[P]>;
};

type UnionToIntersection887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf887<T> = UnionToIntersection887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push887<T extends unknown[], V> = [...T, V];

type TuplifyUnion887<T, L = LastOf887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push887<TuplifyUnion887<Exclude<T, L>>, L>;

type DeepPartial887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial887<T[P]> }
  : T;

type Paths887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join887<K, Paths887<T[K], Prev887[D]>> : never }[keyof T]
  : never;

type Prev887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig887 {
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

type ConfigPaths887 = Paths887<NestedConfig887>;

interface HeavyProps887 {
  config: DeepPartial887<NestedConfig887>;
  path?: ConfigPaths887;
}

const HeavyComponent887 = memo(function HeavyComponent887({ config }: HeavyProps887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent887.displayName = 'HeavyComponent887';
export default HeavyComponent887;
