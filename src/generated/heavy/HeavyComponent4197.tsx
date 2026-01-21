'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4197<T> = T extends (infer U)[]
  ? DeepReadonlyArray4197<U>
  : T extends object
  ? DeepReadonlyObject4197<T>
  : T;

interface DeepReadonlyArray4197<T> extends ReadonlyArray<DeepReadonly4197<T>> {}

type DeepReadonlyObject4197<T> = {
  readonly [P in keyof T]: DeepReadonly4197<T[P]>;
};

type UnionToIntersection4197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4197<T> = UnionToIntersection4197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4197<T extends unknown[], V> = [...T, V];

type TuplifyUnion4197<T, L = LastOf4197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4197<TuplifyUnion4197<Exclude<T, L>>, L>;

type DeepPartial4197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4197<T[P]> }
  : T;

type Paths4197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4197<K, Paths4197<T[K], Prev4197[D]>> : never }[keyof T]
  : never;

type Prev4197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4197 {
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

type ConfigPaths4197 = Paths4197<NestedConfig4197>;

interface HeavyProps4197 {
  config: DeepPartial4197<NestedConfig4197>;
  path?: ConfigPaths4197;
}

const HeavyComponent4197 = memo(function HeavyComponent4197({ config }: HeavyProps4197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4197.displayName = 'HeavyComponent4197';
export default HeavyComponent4197;
