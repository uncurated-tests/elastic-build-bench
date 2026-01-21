'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6260<T> = T extends (infer U)[]
  ? DeepReadonlyArray6260<U>
  : T extends object
  ? DeepReadonlyObject6260<T>
  : T;

interface DeepReadonlyArray6260<T> extends ReadonlyArray<DeepReadonly6260<T>> {}

type DeepReadonlyObject6260<T> = {
  readonly [P in keyof T]: DeepReadonly6260<T[P]>;
};

type UnionToIntersection6260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6260<T> = UnionToIntersection6260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6260<T extends unknown[], V> = [...T, V];

type TuplifyUnion6260<T, L = LastOf6260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6260<TuplifyUnion6260<Exclude<T, L>>, L>;

type DeepPartial6260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6260<T[P]> }
  : T;

type Paths6260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6260<K, Paths6260<T[K], Prev6260[D]>> : never }[keyof T]
  : never;

type Prev6260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6260 {
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

type ConfigPaths6260 = Paths6260<NestedConfig6260>;

interface HeavyProps6260 {
  config: DeepPartial6260<NestedConfig6260>;
  path?: ConfigPaths6260;
}

const HeavyComponent6260 = memo(function HeavyComponent6260({ config }: HeavyProps6260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6260.displayName = 'HeavyComponent6260';
export default HeavyComponent6260;
