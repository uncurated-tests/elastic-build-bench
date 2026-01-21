'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14270<T> = T extends (infer U)[]
  ? DeepReadonlyArray14270<U>
  : T extends object
  ? DeepReadonlyObject14270<T>
  : T;

interface DeepReadonlyArray14270<T> extends ReadonlyArray<DeepReadonly14270<T>> {}

type DeepReadonlyObject14270<T> = {
  readonly [P in keyof T]: DeepReadonly14270<T[P]>;
};

type UnionToIntersection14270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14270<T> = UnionToIntersection14270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14270<T extends unknown[], V> = [...T, V];

type TuplifyUnion14270<T, L = LastOf14270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14270<TuplifyUnion14270<Exclude<T, L>>, L>;

type DeepPartial14270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14270<T[P]> }
  : T;

type Paths14270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14270<K, Paths14270<T[K], Prev14270[D]>> : never }[keyof T]
  : never;

type Prev14270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14270 {
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

type ConfigPaths14270 = Paths14270<NestedConfig14270>;

interface HeavyProps14270 {
  config: DeepPartial14270<NestedConfig14270>;
  path?: ConfigPaths14270;
}

const HeavyComponent14270 = memo(function HeavyComponent14270({ config }: HeavyProps14270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14270.displayName = 'HeavyComponent14270';
export default HeavyComponent14270;
