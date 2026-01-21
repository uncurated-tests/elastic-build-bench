'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6241<T> = T extends (infer U)[]
  ? DeepReadonlyArray6241<U>
  : T extends object
  ? DeepReadonlyObject6241<T>
  : T;

interface DeepReadonlyArray6241<T> extends ReadonlyArray<DeepReadonly6241<T>> {}

type DeepReadonlyObject6241<T> = {
  readonly [P in keyof T]: DeepReadonly6241<T[P]>;
};

type UnionToIntersection6241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6241<T> = UnionToIntersection6241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6241<T extends unknown[], V> = [...T, V];

type TuplifyUnion6241<T, L = LastOf6241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6241<TuplifyUnion6241<Exclude<T, L>>, L>;

type DeepPartial6241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6241<T[P]> }
  : T;

type Paths6241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6241<K, Paths6241<T[K], Prev6241[D]>> : never }[keyof T]
  : never;

type Prev6241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6241 {
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

type ConfigPaths6241 = Paths6241<NestedConfig6241>;

interface HeavyProps6241 {
  config: DeepPartial6241<NestedConfig6241>;
  path?: ConfigPaths6241;
}

const HeavyComponent6241 = memo(function HeavyComponent6241({ config }: HeavyProps6241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6241.displayName = 'HeavyComponent6241';
export default HeavyComponent6241;
