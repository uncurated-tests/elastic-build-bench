'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8926<T> = T extends (infer U)[]
  ? DeepReadonlyArray8926<U>
  : T extends object
  ? DeepReadonlyObject8926<T>
  : T;

interface DeepReadonlyArray8926<T> extends ReadonlyArray<DeepReadonly8926<T>> {}

type DeepReadonlyObject8926<T> = {
  readonly [P in keyof T]: DeepReadonly8926<T[P]>;
};

type UnionToIntersection8926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8926<T> = UnionToIntersection8926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8926<T extends unknown[], V> = [...T, V];

type TuplifyUnion8926<T, L = LastOf8926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8926<TuplifyUnion8926<Exclude<T, L>>, L>;

type DeepPartial8926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8926<T[P]> }
  : T;

type Paths8926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8926<K, Paths8926<T[K], Prev8926[D]>> : never }[keyof T]
  : never;

type Prev8926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8926 {
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

type ConfigPaths8926 = Paths8926<NestedConfig8926>;

interface HeavyProps8926 {
  config: DeepPartial8926<NestedConfig8926>;
  path?: ConfigPaths8926;
}

const HeavyComponent8926 = memo(function HeavyComponent8926({ config }: HeavyProps8926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8926.displayName = 'HeavyComponent8926';
export default HeavyComponent8926;
