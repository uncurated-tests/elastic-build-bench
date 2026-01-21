'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8471<T> = T extends (infer U)[]
  ? DeepReadonlyArray8471<U>
  : T extends object
  ? DeepReadonlyObject8471<T>
  : T;

interface DeepReadonlyArray8471<T> extends ReadonlyArray<DeepReadonly8471<T>> {}

type DeepReadonlyObject8471<T> = {
  readonly [P in keyof T]: DeepReadonly8471<T[P]>;
};

type UnionToIntersection8471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8471<T> = UnionToIntersection8471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8471<T extends unknown[], V> = [...T, V];

type TuplifyUnion8471<T, L = LastOf8471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8471<TuplifyUnion8471<Exclude<T, L>>, L>;

type DeepPartial8471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8471<T[P]> }
  : T;

type Paths8471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8471<K, Paths8471<T[K], Prev8471[D]>> : never }[keyof T]
  : never;

type Prev8471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8471 {
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

type ConfigPaths8471 = Paths8471<NestedConfig8471>;

interface HeavyProps8471 {
  config: DeepPartial8471<NestedConfig8471>;
  path?: ConfigPaths8471;
}

const HeavyComponent8471 = memo(function HeavyComponent8471({ config }: HeavyProps8471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8471.displayName = 'HeavyComponent8471';
export default HeavyComponent8471;
