'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly353<T> = T extends (infer U)[]
  ? DeepReadonlyArray353<U>
  : T extends object
  ? DeepReadonlyObject353<T>
  : T;

interface DeepReadonlyArray353<T> extends ReadonlyArray<DeepReadonly353<T>> {}

type DeepReadonlyObject353<T> = {
  readonly [P in keyof T]: DeepReadonly353<T[P]>;
};

type UnionToIntersection353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf353<T> = UnionToIntersection353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push353<T extends unknown[], V> = [...T, V];

type TuplifyUnion353<T, L = LastOf353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push353<TuplifyUnion353<Exclude<T, L>>, L>;

type DeepPartial353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial353<T[P]> }
  : T;

type Paths353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join353<K, Paths353<T[K], Prev353[D]>> : never }[keyof T]
  : never;

type Prev353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig353 {
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

type ConfigPaths353 = Paths353<NestedConfig353>;

interface HeavyProps353 {
  config: DeepPartial353<NestedConfig353>;
  path?: ConfigPaths353;
}

const HeavyComponent353 = memo(function HeavyComponent353({ config }: HeavyProps353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent353.displayName = 'HeavyComponent353';
export default HeavyComponent353;
