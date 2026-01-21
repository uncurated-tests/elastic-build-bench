'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8063<T> = T extends (infer U)[]
  ? DeepReadonlyArray8063<U>
  : T extends object
  ? DeepReadonlyObject8063<T>
  : T;

interface DeepReadonlyArray8063<T> extends ReadonlyArray<DeepReadonly8063<T>> {}

type DeepReadonlyObject8063<T> = {
  readonly [P in keyof T]: DeepReadonly8063<T[P]>;
};

type UnionToIntersection8063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8063<T> = UnionToIntersection8063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8063<T extends unknown[], V> = [...T, V];

type TuplifyUnion8063<T, L = LastOf8063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8063<TuplifyUnion8063<Exclude<T, L>>, L>;

type DeepPartial8063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8063<T[P]> }
  : T;

type Paths8063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8063<K, Paths8063<T[K], Prev8063[D]>> : never }[keyof T]
  : never;

type Prev8063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8063 {
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

type ConfigPaths8063 = Paths8063<NestedConfig8063>;

interface HeavyProps8063 {
  config: DeepPartial8063<NestedConfig8063>;
  path?: ConfigPaths8063;
}

const HeavyComponent8063 = memo(function HeavyComponent8063({ config }: HeavyProps8063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8063.displayName = 'HeavyComponent8063';
export default HeavyComponent8063;
