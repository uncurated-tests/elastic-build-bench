'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6027<T> = T extends (infer U)[]
  ? DeepReadonlyArray6027<U>
  : T extends object
  ? DeepReadonlyObject6027<T>
  : T;

interface DeepReadonlyArray6027<T> extends ReadonlyArray<DeepReadonly6027<T>> {}

type DeepReadonlyObject6027<T> = {
  readonly [P in keyof T]: DeepReadonly6027<T[P]>;
};

type UnionToIntersection6027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6027<T> = UnionToIntersection6027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6027<T extends unknown[], V> = [...T, V];

type TuplifyUnion6027<T, L = LastOf6027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6027<TuplifyUnion6027<Exclude<T, L>>, L>;

type DeepPartial6027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6027<T[P]> }
  : T;

type Paths6027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6027<K, Paths6027<T[K], Prev6027[D]>> : never }[keyof T]
  : never;

type Prev6027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6027 {
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

type ConfigPaths6027 = Paths6027<NestedConfig6027>;

interface HeavyProps6027 {
  config: DeepPartial6027<NestedConfig6027>;
  path?: ConfigPaths6027;
}

const HeavyComponent6027 = memo(function HeavyComponent6027({ config }: HeavyProps6027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6027.displayName = 'HeavyComponent6027';
export default HeavyComponent6027;
