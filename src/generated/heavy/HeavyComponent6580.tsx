'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6580<T> = T extends (infer U)[]
  ? DeepReadonlyArray6580<U>
  : T extends object
  ? DeepReadonlyObject6580<T>
  : T;

interface DeepReadonlyArray6580<T> extends ReadonlyArray<DeepReadonly6580<T>> {}

type DeepReadonlyObject6580<T> = {
  readonly [P in keyof T]: DeepReadonly6580<T[P]>;
};

type UnionToIntersection6580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6580<T> = UnionToIntersection6580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6580<T extends unknown[], V> = [...T, V];

type TuplifyUnion6580<T, L = LastOf6580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6580<TuplifyUnion6580<Exclude<T, L>>, L>;

type DeepPartial6580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6580<T[P]> }
  : T;

type Paths6580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6580<K, Paths6580<T[K], Prev6580[D]>> : never }[keyof T]
  : never;

type Prev6580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6580 {
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

type ConfigPaths6580 = Paths6580<NestedConfig6580>;

interface HeavyProps6580 {
  config: DeepPartial6580<NestedConfig6580>;
  path?: ConfigPaths6580;
}

const HeavyComponent6580 = memo(function HeavyComponent6580({ config }: HeavyProps6580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6580.displayName = 'HeavyComponent6580';
export default HeavyComponent6580;
