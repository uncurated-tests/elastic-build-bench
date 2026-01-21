'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6145<T> = T extends (infer U)[]
  ? DeepReadonlyArray6145<U>
  : T extends object
  ? DeepReadonlyObject6145<T>
  : T;

interface DeepReadonlyArray6145<T> extends ReadonlyArray<DeepReadonly6145<T>> {}

type DeepReadonlyObject6145<T> = {
  readonly [P in keyof T]: DeepReadonly6145<T[P]>;
};

type UnionToIntersection6145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6145<T> = UnionToIntersection6145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6145<T extends unknown[], V> = [...T, V];

type TuplifyUnion6145<T, L = LastOf6145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6145<TuplifyUnion6145<Exclude<T, L>>, L>;

type DeepPartial6145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6145<T[P]> }
  : T;

type Paths6145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6145<K, Paths6145<T[K], Prev6145[D]>> : never }[keyof T]
  : never;

type Prev6145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6145 {
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

type ConfigPaths6145 = Paths6145<NestedConfig6145>;

interface HeavyProps6145 {
  config: DeepPartial6145<NestedConfig6145>;
  path?: ConfigPaths6145;
}

const HeavyComponent6145 = memo(function HeavyComponent6145({ config }: HeavyProps6145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6145.displayName = 'HeavyComponent6145';
export default HeavyComponent6145;
