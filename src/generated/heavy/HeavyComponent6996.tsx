'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6996<T> = T extends (infer U)[]
  ? DeepReadonlyArray6996<U>
  : T extends object
  ? DeepReadonlyObject6996<T>
  : T;

interface DeepReadonlyArray6996<T> extends ReadonlyArray<DeepReadonly6996<T>> {}

type DeepReadonlyObject6996<T> = {
  readonly [P in keyof T]: DeepReadonly6996<T[P]>;
};

type UnionToIntersection6996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6996<T> = UnionToIntersection6996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6996<T extends unknown[], V> = [...T, V];

type TuplifyUnion6996<T, L = LastOf6996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6996<TuplifyUnion6996<Exclude<T, L>>, L>;

type DeepPartial6996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6996<T[P]> }
  : T;

type Paths6996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6996<K, Paths6996<T[K], Prev6996[D]>> : never }[keyof T]
  : never;

type Prev6996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6996 {
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

type ConfigPaths6996 = Paths6996<NestedConfig6996>;

interface HeavyProps6996 {
  config: DeepPartial6996<NestedConfig6996>;
  path?: ConfigPaths6996;
}

const HeavyComponent6996 = memo(function HeavyComponent6996({ config }: HeavyProps6996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6996.displayName = 'HeavyComponent6996';
export default HeavyComponent6996;
