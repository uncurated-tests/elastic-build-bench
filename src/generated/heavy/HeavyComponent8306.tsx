'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8306<T> = T extends (infer U)[]
  ? DeepReadonlyArray8306<U>
  : T extends object
  ? DeepReadonlyObject8306<T>
  : T;

interface DeepReadonlyArray8306<T> extends ReadonlyArray<DeepReadonly8306<T>> {}

type DeepReadonlyObject8306<T> = {
  readonly [P in keyof T]: DeepReadonly8306<T[P]>;
};

type UnionToIntersection8306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8306<T> = UnionToIntersection8306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8306<T extends unknown[], V> = [...T, V];

type TuplifyUnion8306<T, L = LastOf8306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8306<TuplifyUnion8306<Exclude<T, L>>, L>;

type DeepPartial8306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8306<T[P]> }
  : T;

type Paths8306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8306<K, Paths8306<T[K], Prev8306[D]>> : never }[keyof T]
  : never;

type Prev8306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8306 {
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

type ConfigPaths8306 = Paths8306<NestedConfig8306>;

interface HeavyProps8306 {
  config: DeepPartial8306<NestedConfig8306>;
  path?: ConfigPaths8306;
}

const HeavyComponent8306 = memo(function HeavyComponent8306({ config }: HeavyProps8306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8306.displayName = 'HeavyComponent8306';
export default HeavyComponent8306;
