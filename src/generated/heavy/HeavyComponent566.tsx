'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly566<T> = T extends (infer U)[]
  ? DeepReadonlyArray566<U>
  : T extends object
  ? DeepReadonlyObject566<T>
  : T;

interface DeepReadonlyArray566<T> extends ReadonlyArray<DeepReadonly566<T>> {}

type DeepReadonlyObject566<T> = {
  readonly [P in keyof T]: DeepReadonly566<T[P]>;
};

type UnionToIntersection566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf566<T> = UnionToIntersection566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push566<T extends unknown[], V> = [...T, V];

type TuplifyUnion566<T, L = LastOf566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push566<TuplifyUnion566<Exclude<T, L>>, L>;

type DeepPartial566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial566<T[P]> }
  : T;

type Paths566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join566<K, Paths566<T[K], Prev566[D]>> : never }[keyof T]
  : never;

type Prev566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig566 {
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

type ConfigPaths566 = Paths566<NestedConfig566>;

interface HeavyProps566 {
  config: DeepPartial566<NestedConfig566>;
  path?: ConfigPaths566;
}

const HeavyComponent566 = memo(function HeavyComponent566({ config }: HeavyProps566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent566.displayName = 'HeavyComponent566';
export default HeavyComponent566;
