'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8057<T> = T extends (infer U)[]
  ? DeepReadonlyArray8057<U>
  : T extends object
  ? DeepReadonlyObject8057<T>
  : T;

interface DeepReadonlyArray8057<T> extends ReadonlyArray<DeepReadonly8057<T>> {}

type DeepReadonlyObject8057<T> = {
  readonly [P in keyof T]: DeepReadonly8057<T[P]>;
};

type UnionToIntersection8057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8057<T> = UnionToIntersection8057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8057<T extends unknown[], V> = [...T, V];

type TuplifyUnion8057<T, L = LastOf8057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8057<TuplifyUnion8057<Exclude<T, L>>, L>;

type DeepPartial8057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8057<T[P]> }
  : T;

type Paths8057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8057<K, Paths8057<T[K], Prev8057[D]>> : never }[keyof T]
  : never;

type Prev8057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8057 {
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

type ConfigPaths8057 = Paths8057<NestedConfig8057>;

interface HeavyProps8057 {
  config: DeepPartial8057<NestedConfig8057>;
  path?: ConfigPaths8057;
}

const HeavyComponent8057 = memo(function HeavyComponent8057({ config }: HeavyProps8057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8057.displayName = 'HeavyComponent8057';
export default HeavyComponent8057;
