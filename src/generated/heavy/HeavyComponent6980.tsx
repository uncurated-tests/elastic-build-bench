'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6980<T> = T extends (infer U)[]
  ? DeepReadonlyArray6980<U>
  : T extends object
  ? DeepReadonlyObject6980<T>
  : T;

interface DeepReadonlyArray6980<T> extends ReadonlyArray<DeepReadonly6980<T>> {}

type DeepReadonlyObject6980<T> = {
  readonly [P in keyof T]: DeepReadonly6980<T[P]>;
};

type UnionToIntersection6980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6980<T> = UnionToIntersection6980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6980<T extends unknown[], V> = [...T, V];

type TuplifyUnion6980<T, L = LastOf6980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6980<TuplifyUnion6980<Exclude<T, L>>, L>;

type DeepPartial6980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6980<T[P]> }
  : T;

type Paths6980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6980<K, Paths6980<T[K], Prev6980[D]>> : never }[keyof T]
  : never;

type Prev6980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6980 {
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

type ConfigPaths6980 = Paths6980<NestedConfig6980>;

interface HeavyProps6980 {
  config: DeepPartial6980<NestedConfig6980>;
  path?: ConfigPaths6980;
}

const HeavyComponent6980 = memo(function HeavyComponent6980({ config }: HeavyProps6980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6980.displayName = 'HeavyComponent6980';
export default HeavyComponent6980;
