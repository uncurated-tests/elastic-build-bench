'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3587<T> = T extends (infer U)[]
  ? DeepReadonlyArray3587<U>
  : T extends object
  ? DeepReadonlyObject3587<T>
  : T;

interface DeepReadonlyArray3587<T> extends ReadonlyArray<DeepReadonly3587<T>> {}

type DeepReadonlyObject3587<T> = {
  readonly [P in keyof T]: DeepReadonly3587<T[P]>;
};

type UnionToIntersection3587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3587<T> = UnionToIntersection3587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3587<T extends unknown[], V> = [...T, V];

type TuplifyUnion3587<T, L = LastOf3587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3587<TuplifyUnion3587<Exclude<T, L>>, L>;

type DeepPartial3587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3587<T[P]> }
  : T;

type Paths3587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3587<K, Paths3587<T[K], Prev3587[D]>> : never }[keyof T]
  : never;

type Prev3587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3587 {
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

type ConfigPaths3587 = Paths3587<NestedConfig3587>;

interface HeavyProps3587 {
  config: DeepPartial3587<NestedConfig3587>;
  path?: ConfigPaths3587;
}

const HeavyComponent3587 = memo(function HeavyComponent3587({ config }: HeavyProps3587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3587.displayName = 'HeavyComponent3587';
export default HeavyComponent3587;
