'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8461<T> = T extends (infer U)[]
  ? DeepReadonlyArray8461<U>
  : T extends object
  ? DeepReadonlyObject8461<T>
  : T;

interface DeepReadonlyArray8461<T> extends ReadonlyArray<DeepReadonly8461<T>> {}

type DeepReadonlyObject8461<T> = {
  readonly [P in keyof T]: DeepReadonly8461<T[P]>;
};

type UnionToIntersection8461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8461<T> = UnionToIntersection8461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8461<T extends unknown[], V> = [...T, V];

type TuplifyUnion8461<T, L = LastOf8461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8461<TuplifyUnion8461<Exclude<T, L>>, L>;

type DeepPartial8461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8461<T[P]> }
  : T;

type Paths8461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8461<K, Paths8461<T[K], Prev8461[D]>> : never }[keyof T]
  : never;

type Prev8461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8461 {
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

type ConfigPaths8461 = Paths8461<NestedConfig8461>;

interface HeavyProps8461 {
  config: DeepPartial8461<NestedConfig8461>;
  path?: ConfigPaths8461;
}

const HeavyComponent8461 = memo(function HeavyComponent8461({ config }: HeavyProps8461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8461.displayName = 'HeavyComponent8461';
export default HeavyComponent8461;
