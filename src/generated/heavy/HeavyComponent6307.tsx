'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6307<T> = T extends (infer U)[]
  ? DeepReadonlyArray6307<U>
  : T extends object
  ? DeepReadonlyObject6307<T>
  : T;

interface DeepReadonlyArray6307<T> extends ReadonlyArray<DeepReadonly6307<T>> {}

type DeepReadonlyObject6307<T> = {
  readonly [P in keyof T]: DeepReadonly6307<T[P]>;
};

type UnionToIntersection6307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6307<T> = UnionToIntersection6307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6307<T extends unknown[], V> = [...T, V];

type TuplifyUnion6307<T, L = LastOf6307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6307<TuplifyUnion6307<Exclude<T, L>>, L>;

type DeepPartial6307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6307<T[P]> }
  : T;

type Paths6307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6307<K, Paths6307<T[K], Prev6307[D]>> : never }[keyof T]
  : never;

type Prev6307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6307 {
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

type ConfigPaths6307 = Paths6307<NestedConfig6307>;

interface HeavyProps6307 {
  config: DeepPartial6307<NestedConfig6307>;
  path?: ConfigPaths6307;
}

const HeavyComponent6307 = memo(function HeavyComponent6307({ config }: HeavyProps6307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6307.displayName = 'HeavyComponent6307';
export default HeavyComponent6307;
