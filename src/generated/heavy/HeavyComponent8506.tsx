'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8506<T> = T extends (infer U)[]
  ? DeepReadonlyArray8506<U>
  : T extends object
  ? DeepReadonlyObject8506<T>
  : T;

interface DeepReadonlyArray8506<T> extends ReadonlyArray<DeepReadonly8506<T>> {}

type DeepReadonlyObject8506<T> = {
  readonly [P in keyof T]: DeepReadonly8506<T[P]>;
};

type UnionToIntersection8506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8506<T> = UnionToIntersection8506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8506<T extends unknown[], V> = [...T, V];

type TuplifyUnion8506<T, L = LastOf8506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8506<TuplifyUnion8506<Exclude<T, L>>, L>;

type DeepPartial8506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8506<T[P]> }
  : T;

type Paths8506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8506<K, Paths8506<T[K], Prev8506[D]>> : never }[keyof T]
  : never;

type Prev8506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8506 {
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

type ConfigPaths8506 = Paths8506<NestedConfig8506>;

interface HeavyProps8506 {
  config: DeepPartial8506<NestedConfig8506>;
  path?: ConfigPaths8506;
}

const HeavyComponent8506 = memo(function HeavyComponent8506({ config }: HeavyProps8506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8506.displayName = 'HeavyComponent8506';
export default HeavyComponent8506;
