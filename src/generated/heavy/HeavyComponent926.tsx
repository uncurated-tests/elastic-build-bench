'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly926<T> = T extends (infer U)[]
  ? DeepReadonlyArray926<U>
  : T extends object
  ? DeepReadonlyObject926<T>
  : T;

interface DeepReadonlyArray926<T> extends ReadonlyArray<DeepReadonly926<T>> {}

type DeepReadonlyObject926<T> = {
  readonly [P in keyof T]: DeepReadonly926<T[P]>;
};

type UnionToIntersection926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf926<T> = UnionToIntersection926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push926<T extends unknown[], V> = [...T, V];

type TuplifyUnion926<T, L = LastOf926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push926<TuplifyUnion926<Exclude<T, L>>, L>;

type DeepPartial926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial926<T[P]> }
  : T;

type Paths926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join926<K, Paths926<T[K], Prev926[D]>> : never }[keyof T]
  : never;

type Prev926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig926 {
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

type ConfigPaths926 = Paths926<NestedConfig926>;

interface HeavyProps926 {
  config: DeepPartial926<NestedConfig926>;
  path?: ConfigPaths926;
}

const HeavyComponent926 = memo(function HeavyComponent926({ config }: HeavyProps926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent926.displayName = 'HeavyComponent926';
export default HeavyComponent926;
