'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly702<T> = T extends (infer U)[]
  ? DeepReadonlyArray702<U>
  : T extends object
  ? DeepReadonlyObject702<T>
  : T;

interface DeepReadonlyArray702<T> extends ReadonlyArray<DeepReadonly702<T>> {}

type DeepReadonlyObject702<T> = {
  readonly [P in keyof T]: DeepReadonly702<T[P]>;
};

type UnionToIntersection702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf702<T> = UnionToIntersection702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push702<T extends unknown[], V> = [...T, V];

type TuplifyUnion702<T, L = LastOf702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push702<TuplifyUnion702<Exclude<T, L>>, L>;

type DeepPartial702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial702<T[P]> }
  : T;

type Paths702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join702<K, Paths702<T[K], Prev702[D]>> : never }[keyof T]
  : never;

type Prev702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig702 {
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

type ConfigPaths702 = Paths702<NestedConfig702>;

interface HeavyProps702 {
  config: DeepPartial702<NestedConfig702>;
  path?: ConfigPaths702;
}

const HeavyComponent702 = memo(function HeavyComponent702({ config }: HeavyProps702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent702.displayName = 'HeavyComponent702';
export default HeavyComponent702;
