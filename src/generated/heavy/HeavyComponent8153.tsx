'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8153<T> = T extends (infer U)[]
  ? DeepReadonlyArray8153<U>
  : T extends object
  ? DeepReadonlyObject8153<T>
  : T;

interface DeepReadonlyArray8153<T> extends ReadonlyArray<DeepReadonly8153<T>> {}

type DeepReadonlyObject8153<T> = {
  readonly [P in keyof T]: DeepReadonly8153<T[P]>;
};

type UnionToIntersection8153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8153<T> = UnionToIntersection8153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8153<T extends unknown[], V> = [...T, V];

type TuplifyUnion8153<T, L = LastOf8153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8153<TuplifyUnion8153<Exclude<T, L>>, L>;

type DeepPartial8153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8153<T[P]> }
  : T;

type Paths8153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8153<K, Paths8153<T[K], Prev8153[D]>> : never }[keyof T]
  : never;

type Prev8153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8153 {
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

type ConfigPaths8153 = Paths8153<NestedConfig8153>;

interface HeavyProps8153 {
  config: DeepPartial8153<NestedConfig8153>;
  path?: ConfigPaths8153;
}

const HeavyComponent8153 = memo(function HeavyComponent8153({ config }: HeavyProps8153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8153.displayName = 'HeavyComponent8153';
export default HeavyComponent8153;
