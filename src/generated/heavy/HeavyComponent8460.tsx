'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8460<T> = T extends (infer U)[]
  ? DeepReadonlyArray8460<U>
  : T extends object
  ? DeepReadonlyObject8460<T>
  : T;

interface DeepReadonlyArray8460<T> extends ReadonlyArray<DeepReadonly8460<T>> {}

type DeepReadonlyObject8460<T> = {
  readonly [P in keyof T]: DeepReadonly8460<T[P]>;
};

type UnionToIntersection8460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8460<T> = UnionToIntersection8460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8460<T extends unknown[], V> = [...T, V];

type TuplifyUnion8460<T, L = LastOf8460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8460<TuplifyUnion8460<Exclude<T, L>>, L>;

type DeepPartial8460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8460<T[P]> }
  : T;

type Paths8460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8460<K, Paths8460<T[K], Prev8460[D]>> : never }[keyof T]
  : never;

type Prev8460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8460 {
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

type ConfigPaths8460 = Paths8460<NestedConfig8460>;

interface HeavyProps8460 {
  config: DeepPartial8460<NestedConfig8460>;
  path?: ConfigPaths8460;
}

const HeavyComponent8460 = memo(function HeavyComponent8460({ config }: HeavyProps8460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8460.displayName = 'HeavyComponent8460';
export default HeavyComponent8460;
