'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8958<T> = T extends (infer U)[]
  ? DeepReadonlyArray8958<U>
  : T extends object
  ? DeepReadonlyObject8958<T>
  : T;

interface DeepReadonlyArray8958<T> extends ReadonlyArray<DeepReadonly8958<T>> {}

type DeepReadonlyObject8958<T> = {
  readonly [P in keyof T]: DeepReadonly8958<T[P]>;
};

type UnionToIntersection8958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8958<T> = UnionToIntersection8958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8958<T extends unknown[], V> = [...T, V];

type TuplifyUnion8958<T, L = LastOf8958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8958<TuplifyUnion8958<Exclude<T, L>>, L>;

type DeepPartial8958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8958<T[P]> }
  : T;

type Paths8958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8958<K, Paths8958<T[K], Prev8958[D]>> : never }[keyof T]
  : never;

type Prev8958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8958 {
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

type ConfigPaths8958 = Paths8958<NestedConfig8958>;

interface HeavyProps8958 {
  config: DeepPartial8958<NestedConfig8958>;
  path?: ConfigPaths8958;
}

const HeavyComponent8958 = memo(function HeavyComponent8958({ config }: HeavyProps8958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8958.displayName = 'HeavyComponent8958';
export default HeavyComponent8958;
