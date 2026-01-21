'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6403<T> = T extends (infer U)[]
  ? DeepReadonlyArray6403<U>
  : T extends object
  ? DeepReadonlyObject6403<T>
  : T;

interface DeepReadonlyArray6403<T> extends ReadonlyArray<DeepReadonly6403<T>> {}

type DeepReadonlyObject6403<T> = {
  readonly [P in keyof T]: DeepReadonly6403<T[P]>;
};

type UnionToIntersection6403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6403<T> = UnionToIntersection6403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6403<T extends unknown[], V> = [...T, V];

type TuplifyUnion6403<T, L = LastOf6403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6403<TuplifyUnion6403<Exclude<T, L>>, L>;

type DeepPartial6403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6403<T[P]> }
  : T;

type Paths6403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6403<K, Paths6403<T[K], Prev6403[D]>> : never }[keyof T]
  : never;

type Prev6403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6403 {
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

type ConfigPaths6403 = Paths6403<NestedConfig6403>;

interface HeavyProps6403 {
  config: DeepPartial6403<NestedConfig6403>;
  path?: ConfigPaths6403;
}

const HeavyComponent6403 = memo(function HeavyComponent6403({ config }: HeavyProps6403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6403.displayName = 'HeavyComponent6403';
export default HeavyComponent6403;
