'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8046<T> = T extends (infer U)[]
  ? DeepReadonlyArray8046<U>
  : T extends object
  ? DeepReadonlyObject8046<T>
  : T;

interface DeepReadonlyArray8046<T> extends ReadonlyArray<DeepReadonly8046<T>> {}

type DeepReadonlyObject8046<T> = {
  readonly [P in keyof T]: DeepReadonly8046<T[P]>;
};

type UnionToIntersection8046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8046<T> = UnionToIntersection8046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8046<T extends unknown[], V> = [...T, V];

type TuplifyUnion8046<T, L = LastOf8046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8046<TuplifyUnion8046<Exclude<T, L>>, L>;

type DeepPartial8046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8046<T[P]> }
  : T;

type Paths8046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8046<K, Paths8046<T[K], Prev8046[D]>> : never }[keyof T]
  : never;

type Prev8046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8046 {
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

type ConfigPaths8046 = Paths8046<NestedConfig8046>;

interface HeavyProps8046 {
  config: DeepPartial8046<NestedConfig8046>;
  path?: ConfigPaths8046;
}

const HeavyComponent8046 = memo(function HeavyComponent8046({ config }: HeavyProps8046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8046.displayName = 'HeavyComponent8046';
export default HeavyComponent8046;
