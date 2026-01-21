'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2773<T> = T extends (infer U)[]
  ? DeepReadonlyArray2773<U>
  : T extends object
  ? DeepReadonlyObject2773<T>
  : T;

interface DeepReadonlyArray2773<T> extends ReadonlyArray<DeepReadonly2773<T>> {}

type DeepReadonlyObject2773<T> = {
  readonly [P in keyof T]: DeepReadonly2773<T[P]>;
};

type UnionToIntersection2773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2773<T> = UnionToIntersection2773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2773<T extends unknown[], V> = [...T, V];

type TuplifyUnion2773<T, L = LastOf2773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2773<TuplifyUnion2773<Exclude<T, L>>, L>;

type DeepPartial2773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2773<T[P]> }
  : T;

type Paths2773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2773<K, Paths2773<T[K], Prev2773[D]>> : never }[keyof T]
  : never;

type Prev2773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2773 {
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

type ConfigPaths2773 = Paths2773<NestedConfig2773>;

interface HeavyProps2773 {
  config: DeepPartial2773<NestedConfig2773>;
  path?: ConfigPaths2773;
}

const HeavyComponent2773 = memo(function HeavyComponent2773({ config }: HeavyProps2773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2773.displayName = 'HeavyComponent2773';
export default HeavyComponent2773;
