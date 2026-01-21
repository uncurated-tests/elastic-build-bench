'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6228<T> = T extends (infer U)[]
  ? DeepReadonlyArray6228<U>
  : T extends object
  ? DeepReadonlyObject6228<T>
  : T;

interface DeepReadonlyArray6228<T> extends ReadonlyArray<DeepReadonly6228<T>> {}

type DeepReadonlyObject6228<T> = {
  readonly [P in keyof T]: DeepReadonly6228<T[P]>;
};

type UnionToIntersection6228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6228<T> = UnionToIntersection6228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6228<T extends unknown[], V> = [...T, V];

type TuplifyUnion6228<T, L = LastOf6228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6228<TuplifyUnion6228<Exclude<T, L>>, L>;

type DeepPartial6228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6228<T[P]> }
  : T;

type Paths6228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6228<K, Paths6228<T[K], Prev6228[D]>> : never }[keyof T]
  : never;

type Prev6228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6228 {
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

type ConfigPaths6228 = Paths6228<NestedConfig6228>;

interface HeavyProps6228 {
  config: DeepPartial6228<NestedConfig6228>;
  path?: ConfigPaths6228;
}

const HeavyComponent6228 = memo(function HeavyComponent6228({ config }: HeavyProps6228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6228.displayName = 'HeavyComponent6228';
export default HeavyComponent6228;
