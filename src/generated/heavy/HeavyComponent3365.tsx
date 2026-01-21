'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3365<T> = T extends (infer U)[]
  ? DeepReadonlyArray3365<U>
  : T extends object
  ? DeepReadonlyObject3365<T>
  : T;

interface DeepReadonlyArray3365<T> extends ReadonlyArray<DeepReadonly3365<T>> {}

type DeepReadonlyObject3365<T> = {
  readonly [P in keyof T]: DeepReadonly3365<T[P]>;
};

type UnionToIntersection3365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3365<T> = UnionToIntersection3365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3365<T extends unknown[], V> = [...T, V];

type TuplifyUnion3365<T, L = LastOf3365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3365<TuplifyUnion3365<Exclude<T, L>>, L>;

type DeepPartial3365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3365<T[P]> }
  : T;

type Paths3365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3365<K, Paths3365<T[K], Prev3365[D]>> : never }[keyof T]
  : never;

type Prev3365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3365 {
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

type ConfigPaths3365 = Paths3365<NestedConfig3365>;

interface HeavyProps3365 {
  config: DeepPartial3365<NestedConfig3365>;
  path?: ConfigPaths3365;
}

const HeavyComponent3365 = memo(function HeavyComponent3365({ config }: HeavyProps3365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3365.displayName = 'HeavyComponent3365';
export default HeavyComponent3365;
