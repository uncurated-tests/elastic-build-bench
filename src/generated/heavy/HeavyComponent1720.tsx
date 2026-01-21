'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1720<T> = T extends (infer U)[]
  ? DeepReadonlyArray1720<U>
  : T extends object
  ? DeepReadonlyObject1720<T>
  : T;

interface DeepReadonlyArray1720<T> extends ReadonlyArray<DeepReadonly1720<T>> {}

type DeepReadonlyObject1720<T> = {
  readonly [P in keyof T]: DeepReadonly1720<T[P]>;
};

type UnionToIntersection1720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1720<T> = UnionToIntersection1720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1720<T extends unknown[], V> = [...T, V];

type TuplifyUnion1720<T, L = LastOf1720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1720<TuplifyUnion1720<Exclude<T, L>>, L>;

type DeepPartial1720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1720<T[P]> }
  : T;

type Paths1720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1720<K, Paths1720<T[K], Prev1720[D]>> : never }[keyof T]
  : never;

type Prev1720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1720 {
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

type ConfigPaths1720 = Paths1720<NestedConfig1720>;

interface HeavyProps1720 {
  config: DeepPartial1720<NestedConfig1720>;
  path?: ConfigPaths1720;
}

const HeavyComponent1720 = memo(function HeavyComponent1720({ config }: HeavyProps1720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1720.displayName = 'HeavyComponent1720';
export default HeavyComponent1720;
