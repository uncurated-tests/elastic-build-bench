'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6540<T> = T extends (infer U)[]
  ? DeepReadonlyArray6540<U>
  : T extends object
  ? DeepReadonlyObject6540<T>
  : T;

interface DeepReadonlyArray6540<T> extends ReadonlyArray<DeepReadonly6540<T>> {}

type DeepReadonlyObject6540<T> = {
  readonly [P in keyof T]: DeepReadonly6540<T[P]>;
};

type UnionToIntersection6540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6540<T> = UnionToIntersection6540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6540<T extends unknown[], V> = [...T, V];

type TuplifyUnion6540<T, L = LastOf6540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6540<TuplifyUnion6540<Exclude<T, L>>, L>;

type DeepPartial6540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6540<T[P]> }
  : T;

type Paths6540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6540<K, Paths6540<T[K], Prev6540[D]>> : never }[keyof T]
  : never;

type Prev6540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6540 {
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

type ConfigPaths6540 = Paths6540<NestedConfig6540>;

interface HeavyProps6540 {
  config: DeepPartial6540<NestedConfig6540>;
  path?: ConfigPaths6540;
}

const HeavyComponent6540 = memo(function HeavyComponent6540({ config }: HeavyProps6540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6540.displayName = 'HeavyComponent6540';
export default HeavyComponent6540;
