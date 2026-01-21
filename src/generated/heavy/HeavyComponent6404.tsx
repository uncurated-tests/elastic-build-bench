'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6404<T> = T extends (infer U)[]
  ? DeepReadonlyArray6404<U>
  : T extends object
  ? DeepReadonlyObject6404<T>
  : T;

interface DeepReadonlyArray6404<T> extends ReadonlyArray<DeepReadonly6404<T>> {}

type DeepReadonlyObject6404<T> = {
  readonly [P in keyof T]: DeepReadonly6404<T[P]>;
};

type UnionToIntersection6404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6404<T> = UnionToIntersection6404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6404<T extends unknown[], V> = [...T, V];

type TuplifyUnion6404<T, L = LastOf6404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6404<TuplifyUnion6404<Exclude<T, L>>, L>;

type DeepPartial6404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6404<T[P]> }
  : T;

type Paths6404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6404<K, Paths6404<T[K], Prev6404[D]>> : never }[keyof T]
  : never;

type Prev6404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6404 {
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

type ConfigPaths6404 = Paths6404<NestedConfig6404>;

interface HeavyProps6404 {
  config: DeepPartial6404<NestedConfig6404>;
  path?: ConfigPaths6404;
}

const HeavyComponent6404 = memo(function HeavyComponent6404({ config }: HeavyProps6404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6404.displayName = 'HeavyComponent6404';
export default HeavyComponent6404;
