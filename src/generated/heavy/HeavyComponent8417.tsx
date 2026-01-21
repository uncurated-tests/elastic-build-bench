'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8417<T> = T extends (infer U)[]
  ? DeepReadonlyArray8417<U>
  : T extends object
  ? DeepReadonlyObject8417<T>
  : T;

interface DeepReadonlyArray8417<T> extends ReadonlyArray<DeepReadonly8417<T>> {}

type DeepReadonlyObject8417<T> = {
  readonly [P in keyof T]: DeepReadonly8417<T[P]>;
};

type UnionToIntersection8417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8417<T> = UnionToIntersection8417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8417<T extends unknown[], V> = [...T, V];

type TuplifyUnion8417<T, L = LastOf8417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8417<TuplifyUnion8417<Exclude<T, L>>, L>;

type DeepPartial8417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8417<T[P]> }
  : T;

type Paths8417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8417<K, Paths8417<T[K], Prev8417[D]>> : never }[keyof T]
  : never;

type Prev8417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8417 {
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

type ConfigPaths8417 = Paths8417<NestedConfig8417>;

interface HeavyProps8417 {
  config: DeepPartial8417<NestedConfig8417>;
  path?: ConfigPaths8417;
}

const HeavyComponent8417 = memo(function HeavyComponent8417({ config }: HeavyProps8417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8417.displayName = 'HeavyComponent8417';
export default HeavyComponent8417;
