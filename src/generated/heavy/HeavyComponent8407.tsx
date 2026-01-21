'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8407<T> = T extends (infer U)[]
  ? DeepReadonlyArray8407<U>
  : T extends object
  ? DeepReadonlyObject8407<T>
  : T;

interface DeepReadonlyArray8407<T> extends ReadonlyArray<DeepReadonly8407<T>> {}

type DeepReadonlyObject8407<T> = {
  readonly [P in keyof T]: DeepReadonly8407<T[P]>;
};

type UnionToIntersection8407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8407<T> = UnionToIntersection8407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8407<T extends unknown[], V> = [...T, V];

type TuplifyUnion8407<T, L = LastOf8407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8407<TuplifyUnion8407<Exclude<T, L>>, L>;

type DeepPartial8407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8407<T[P]> }
  : T;

type Paths8407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8407<K, Paths8407<T[K], Prev8407[D]>> : never }[keyof T]
  : never;

type Prev8407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8407 {
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

type ConfigPaths8407 = Paths8407<NestedConfig8407>;

interface HeavyProps8407 {
  config: DeepPartial8407<NestedConfig8407>;
  path?: ConfigPaths8407;
}

const HeavyComponent8407 = memo(function HeavyComponent8407({ config }: HeavyProps8407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8407.displayName = 'HeavyComponent8407';
export default HeavyComponent8407;
