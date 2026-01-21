'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8796<T> = T extends (infer U)[]
  ? DeepReadonlyArray8796<U>
  : T extends object
  ? DeepReadonlyObject8796<T>
  : T;

interface DeepReadonlyArray8796<T> extends ReadonlyArray<DeepReadonly8796<T>> {}

type DeepReadonlyObject8796<T> = {
  readonly [P in keyof T]: DeepReadonly8796<T[P]>;
};

type UnionToIntersection8796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8796<T> = UnionToIntersection8796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8796<T extends unknown[], V> = [...T, V];

type TuplifyUnion8796<T, L = LastOf8796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8796<TuplifyUnion8796<Exclude<T, L>>, L>;

type DeepPartial8796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8796<T[P]> }
  : T;

type Paths8796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8796<K, Paths8796<T[K], Prev8796[D]>> : never }[keyof T]
  : never;

type Prev8796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8796 {
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

type ConfigPaths8796 = Paths8796<NestedConfig8796>;

interface HeavyProps8796 {
  config: DeepPartial8796<NestedConfig8796>;
  path?: ConfigPaths8796;
}

const HeavyComponent8796 = memo(function HeavyComponent8796({ config }: HeavyProps8796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8796.displayName = 'HeavyComponent8796';
export default HeavyComponent8796;
