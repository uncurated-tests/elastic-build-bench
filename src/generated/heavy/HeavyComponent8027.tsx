'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8027<T> = T extends (infer U)[]
  ? DeepReadonlyArray8027<U>
  : T extends object
  ? DeepReadonlyObject8027<T>
  : T;

interface DeepReadonlyArray8027<T> extends ReadonlyArray<DeepReadonly8027<T>> {}

type DeepReadonlyObject8027<T> = {
  readonly [P in keyof T]: DeepReadonly8027<T[P]>;
};

type UnionToIntersection8027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8027<T> = UnionToIntersection8027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8027<T extends unknown[], V> = [...T, V];

type TuplifyUnion8027<T, L = LastOf8027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8027<TuplifyUnion8027<Exclude<T, L>>, L>;

type DeepPartial8027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8027<T[P]> }
  : T;

type Paths8027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8027<K, Paths8027<T[K], Prev8027[D]>> : never }[keyof T]
  : never;

type Prev8027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8027 {
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

type ConfigPaths8027 = Paths8027<NestedConfig8027>;

interface HeavyProps8027 {
  config: DeepPartial8027<NestedConfig8027>;
  path?: ConfigPaths8027;
}

const HeavyComponent8027 = memo(function HeavyComponent8027({ config }: HeavyProps8027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8027.displayName = 'HeavyComponent8027';
export default HeavyComponent8027;
