'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8073<T> = T extends (infer U)[]
  ? DeepReadonlyArray8073<U>
  : T extends object
  ? DeepReadonlyObject8073<T>
  : T;

interface DeepReadonlyArray8073<T> extends ReadonlyArray<DeepReadonly8073<T>> {}

type DeepReadonlyObject8073<T> = {
  readonly [P in keyof T]: DeepReadonly8073<T[P]>;
};

type UnionToIntersection8073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8073<T> = UnionToIntersection8073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8073<T extends unknown[], V> = [...T, V];

type TuplifyUnion8073<T, L = LastOf8073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8073<TuplifyUnion8073<Exclude<T, L>>, L>;

type DeepPartial8073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8073<T[P]> }
  : T;

type Paths8073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8073<K, Paths8073<T[K], Prev8073[D]>> : never }[keyof T]
  : never;

type Prev8073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8073 {
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

type ConfigPaths8073 = Paths8073<NestedConfig8073>;

interface HeavyProps8073 {
  config: DeepPartial8073<NestedConfig8073>;
  path?: ConfigPaths8073;
}

const HeavyComponent8073 = memo(function HeavyComponent8073({ config }: HeavyProps8073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8073.displayName = 'HeavyComponent8073';
export default HeavyComponent8073;
