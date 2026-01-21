'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6387<T> = T extends (infer U)[]
  ? DeepReadonlyArray6387<U>
  : T extends object
  ? DeepReadonlyObject6387<T>
  : T;

interface DeepReadonlyArray6387<T> extends ReadonlyArray<DeepReadonly6387<T>> {}

type DeepReadonlyObject6387<T> = {
  readonly [P in keyof T]: DeepReadonly6387<T[P]>;
};

type UnionToIntersection6387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6387<T> = UnionToIntersection6387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6387<T extends unknown[], V> = [...T, V];

type TuplifyUnion6387<T, L = LastOf6387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6387<TuplifyUnion6387<Exclude<T, L>>, L>;

type DeepPartial6387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6387<T[P]> }
  : T;

type Paths6387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6387<K, Paths6387<T[K], Prev6387[D]>> : never }[keyof T]
  : never;

type Prev6387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6387 {
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

type ConfigPaths6387 = Paths6387<NestedConfig6387>;

interface HeavyProps6387 {
  config: DeepPartial6387<NestedConfig6387>;
  path?: ConfigPaths6387;
}

const HeavyComponent6387 = memo(function HeavyComponent6387({ config }: HeavyProps6387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6387.displayName = 'HeavyComponent6387';
export default HeavyComponent6387;
