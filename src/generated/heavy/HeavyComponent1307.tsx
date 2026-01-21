'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1307<T> = T extends (infer U)[]
  ? DeepReadonlyArray1307<U>
  : T extends object
  ? DeepReadonlyObject1307<T>
  : T;

interface DeepReadonlyArray1307<T> extends ReadonlyArray<DeepReadonly1307<T>> {}

type DeepReadonlyObject1307<T> = {
  readonly [P in keyof T]: DeepReadonly1307<T[P]>;
};

type UnionToIntersection1307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1307<T> = UnionToIntersection1307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1307<T extends unknown[], V> = [...T, V];

type TuplifyUnion1307<T, L = LastOf1307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1307<TuplifyUnion1307<Exclude<T, L>>, L>;

type DeepPartial1307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1307<T[P]> }
  : T;

type Paths1307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1307<K, Paths1307<T[K], Prev1307[D]>> : never }[keyof T]
  : never;

type Prev1307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1307 {
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

type ConfigPaths1307 = Paths1307<NestedConfig1307>;

interface HeavyProps1307 {
  config: DeepPartial1307<NestedConfig1307>;
  path?: ConfigPaths1307;
}

const HeavyComponent1307 = memo(function HeavyComponent1307({ config }: HeavyProps1307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1307.displayName = 'HeavyComponent1307';
export default HeavyComponent1307;
