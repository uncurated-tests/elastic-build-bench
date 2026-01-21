'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6536<T> = T extends (infer U)[]
  ? DeepReadonlyArray6536<U>
  : T extends object
  ? DeepReadonlyObject6536<T>
  : T;

interface DeepReadonlyArray6536<T> extends ReadonlyArray<DeepReadonly6536<T>> {}

type DeepReadonlyObject6536<T> = {
  readonly [P in keyof T]: DeepReadonly6536<T[P]>;
};

type UnionToIntersection6536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6536<T> = UnionToIntersection6536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6536<T extends unknown[], V> = [...T, V];

type TuplifyUnion6536<T, L = LastOf6536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6536<TuplifyUnion6536<Exclude<T, L>>, L>;

type DeepPartial6536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6536<T[P]> }
  : T;

type Paths6536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6536<K, Paths6536<T[K], Prev6536[D]>> : never }[keyof T]
  : never;

type Prev6536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6536 {
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

type ConfigPaths6536 = Paths6536<NestedConfig6536>;

interface HeavyProps6536 {
  config: DeepPartial6536<NestedConfig6536>;
  path?: ConfigPaths6536;
}

const HeavyComponent6536 = memo(function HeavyComponent6536({ config }: HeavyProps6536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6536.displayName = 'HeavyComponent6536';
export default HeavyComponent6536;
