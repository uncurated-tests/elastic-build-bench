'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8262<T> = T extends (infer U)[]
  ? DeepReadonlyArray8262<U>
  : T extends object
  ? DeepReadonlyObject8262<T>
  : T;

interface DeepReadonlyArray8262<T> extends ReadonlyArray<DeepReadonly8262<T>> {}

type DeepReadonlyObject8262<T> = {
  readonly [P in keyof T]: DeepReadonly8262<T[P]>;
};

type UnionToIntersection8262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8262<T> = UnionToIntersection8262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8262<T extends unknown[], V> = [...T, V];

type TuplifyUnion8262<T, L = LastOf8262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8262<TuplifyUnion8262<Exclude<T, L>>, L>;

type DeepPartial8262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8262<T[P]> }
  : T;

type Paths8262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8262<K, Paths8262<T[K], Prev8262[D]>> : never }[keyof T]
  : never;

type Prev8262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8262 {
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

type ConfigPaths8262 = Paths8262<NestedConfig8262>;

interface HeavyProps8262 {
  config: DeepPartial8262<NestedConfig8262>;
  path?: ConfigPaths8262;
}

const HeavyComponent8262 = memo(function HeavyComponent8262({ config }: HeavyProps8262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8262.displayName = 'HeavyComponent8262';
export default HeavyComponent8262;
