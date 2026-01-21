'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8778<T> = T extends (infer U)[]
  ? DeepReadonlyArray8778<U>
  : T extends object
  ? DeepReadonlyObject8778<T>
  : T;

interface DeepReadonlyArray8778<T> extends ReadonlyArray<DeepReadonly8778<T>> {}

type DeepReadonlyObject8778<T> = {
  readonly [P in keyof T]: DeepReadonly8778<T[P]>;
};

type UnionToIntersection8778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8778<T> = UnionToIntersection8778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8778<T extends unknown[], V> = [...T, V];

type TuplifyUnion8778<T, L = LastOf8778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8778<TuplifyUnion8778<Exclude<T, L>>, L>;

type DeepPartial8778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8778<T[P]> }
  : T;

type Paths8778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8778<K, Paths8778<T[K], Prev8778[D]>> : never }[keyof T]
  : never;

type Prev8778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8778 {
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

type ConfigPaths8778 = Paths8778<NestedConfig8778>;

interface HeavyProps8778 {
  config: DeepPartial8778<NestedConfig8778>;
  path?: ConfigPaths8778;
}

const HeavyComponent8778 = memo(function HeavyComponent8778({ config }: HeavyProps8778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8778.displayName = 'HeavyComponent8778';
export default HeavyComponent8778;
