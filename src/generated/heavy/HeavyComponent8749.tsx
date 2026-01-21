'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8749<T> = T extends (infer U)[]
  ? DeepReadonlyArray8749<U>
  : T extends object
  ? DeepReadonlyObject8749<T>
  : T;

interface DeepReadonlyArray8749<T> extends ReadonlyArray<DeepReadonly8749<T>> {}

type DeepReadonlyObject8749<T> = {
  readonly [P in keyof T]: DeepReadonly8749<T[P]>;
};

type UnionToIntersection8749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8749<T> = UnionToIntersection8749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8749<T extends unknown[], V> = [...T, V];

type TuplifyUnion8749<T, L = LastOf8749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8749<TuplifyUnion8749<Exclude<T, L>>, L>;

type DeepPartial8749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8749<T[P]> }
  : T;

type Paths8749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8749<K, Paths8749<T[K], Prev8749[D]>> : never }[keyof T]
  : never;

type Prev8749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8749 {
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

type ConfigPaths8749 = Paths8749<NestedConfig8749>;

interface HeavyProps8749 {
  config: DeepPartial8749<NestedConfig8749>;
  path?: ConfigPaths8749;
}

const HeavyComponent8749 = memo(function HeavyComponent8749({ config }: HeavyProps8749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8749.displayName = 'HeavyComponent8749';
export default HeavyComponent8749;
