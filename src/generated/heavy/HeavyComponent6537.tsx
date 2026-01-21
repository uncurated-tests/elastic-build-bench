'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6537<T> = T extends (infer U)[]
  ? DeepReadonlyArray6537<U>
  : T extends object
  ? DeepReadonlyObject6537<T>
  : T;

interface DeepReadonlyArray6537<T> extends ReadonlyArray<DeepReadonly6537<T>> {}

type DeepReadonlyObject6537<T> = {
  readonly [P in keyof T]: DeepReadonly6537<T[P]>;
};

type UnionToIntersection6537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6537<T> = UnionToIntersection6537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6537<T extends unknown[], V> = [...T, V];

type TuplifyUnion6537<T, L = LastOf6537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6537<TuplifyUnion6537<Exclude<T, L>>, L>;

type DeepPartial6537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6537<T[P]> }
  : T;

type Paths6537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6537<K, Paths6537<T[K], Prev6537[D]>> : never }[keyof T]
  : never;

type Prev6537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6537 {
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

type ConfigPaths6537 = Paths6537<NestedConfig6537>;

interface HeavyProps6537 {
  config: DeepPartial6537<NestedConfig6537>;
  path?: ConfigPaths6537;
}

const HeavyComponent6537 = memo(function HeavyComponent6537({ config }: HeavyProps6537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6537.displayName = 'HeavyComponent6537';
export default HeavyComponent6537;
