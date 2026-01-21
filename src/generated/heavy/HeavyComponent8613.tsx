'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8613<T> = T extends (infer U)[]
  ? DeepReadonlyArray8613<U>
  : T extends object
  ? DeepReadonlyObject8613<T>
  : T;

interface DeepReadonlyArray8613<T> extends ReadonlyArray<DeepReadonly8613<T>> {}

type DeepReadonlyObject8613<T> = {
  readonly [P in keyof T]: DeepReadonly8613<T[P]>;
};

type UnionToIntersection8613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8613<T> = UnionToIntersection8613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8613<T extends unknown[], V> = [...T, V];

type TuplifyUnion8613<T, L = LastOf8613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8613<TuplifyUnion8613<Exclude<T, L>>, L>;

type DeepPartial8613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8613<T[P]> }
  : T;

type Paths8613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8613<K, Paths8613<T[K], Prev8613[D]>> : never }[keyof T]
  : never;

type Prev8613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8613 {
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

type ConfigPaths8613 = Paths8613<NestedConfig8613>;

interface HeavyProps8613 {
  config: DeepPartial8613<NestedConfig8613>;
  path?: ConfigPaths8613;
}

const HeavyComponent8613 = memo(function HeavyComponent8613({ config }: HeavyProps8613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8613.displayName = 'HeavyComponent8613';
export default HeavyComponent8613;
