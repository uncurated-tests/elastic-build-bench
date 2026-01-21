'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8405<T> = T extends (infer U)[]
  ? DeepReadonlyArray8405<U>
  : T extends object
  ? DeepReadonlyObject8405<T>
  : T;

interface DeepReadonlyArray8405<T> extends ReadonlyArray<DeepReadonly8405<T>> {}

type DeepReadonlyObject8405<T> = {
  readonly [P in keyof T]: DeepReadonly8405<T[P]>;
};

type UnionToIntersection8405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8405<T> = UnionToIntersection8405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8405<T extends unknown[], V> = [...T, V];

type TuplifyUnion8405<T, L = LastOf8405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8405<TuplifyUnion8405<Exclude<T, L>>, L>;

type DeepPartial8405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8405<T[P]> }
  : T;

type Paths8405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8405<K, Paths8405<T[K], Prev8405[D]>> : never }[keyof T]
  : never;

type Prev8405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8405 {
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

type ConfigPaths8405 = Paths8405<NestedConfig8405>;

interface HeavyProps8405 {
  config: DeepPartial8405<NestedConfig8405>;
  path?: ConfigPaths8405;
}

const HeavyComponent8405 = memo(function HeavyComponent8405({ config }: HeavyProps8405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8405.displayName = 'HeavyComponent8405';
export default HeavyComponent8405;
